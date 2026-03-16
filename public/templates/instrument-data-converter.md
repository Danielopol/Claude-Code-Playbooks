# Instrument Data to Allotrope Converter

Convert instrument files into standardized Allotrope Simple Model (ASM) format for LIMS upload, data lakes, or handoff to data engineering teams.

> **Note: This is an Example Workflow**
>
> This workflow demonstrates how automated assistants can support your data engineering tasks -- automating schema transformations, parsing instrument outputs, and generating production-ready code.
>
> **To customize for your organization:**
> - Modify the `references/` files to include your company's specific schemas or ontology mappings
> - Use an MCP server to connect to systems that define your schemas (e.g., your LIMS, data catalog, or schema registry)
> - Extend the `scripts/` to handle proprietary instrument formats or internal data standards
>
> This pattern can be adapted for any data transformation workflow where you need to convert between formats or validate against organizational standards.

## Workflow Overview

1. **Detect instrument type** from file contents (auto-detect or user-specified)
2. **Parse file** using allotropy library (native) or flexible fallback parser
3. **Generate outputs**:
   - ASM JSON (full semantic structure)
   - Flattened CSV (2D tabular format)
   - Python parser code (for data engineer handoff)
4. **Deliver** files with summary and usage instructions

> **When Uncertain:** If you're unsure how to map a field to ASM (e.g., is this raw data or calculated? device setting or environmental condition?), ask the user for clarification. Refer to `references/field_classification_guide.md` for guidance, but when ambiguity remains, confirm with the user rather than guessing.

## Quick Start

```python
# Install requirements first
pip install allotropy pandas openpyxl pdfplumber --break-system-packages

# Core conversion
from allotropy.parser_factory import Vendor
from allotropy.to_allotrope import allotrope_from_file

# Convert with allotropy
asm = allotrope_from_file("instrument_data.csv", Vendor.BECKMAN_VI_CELL_BLU)
```

## Output Format Selection

**ASM JSON (default)** - Full semantic structure with ontology URIs
- Best for: LIMS systems expecting ASM, data lakes, long-term archival
- Validates against Allotrope schemas

**Flattened CSV** - 2D tabular representation
- Best for: Quick analysis, Excel users, systems without JSON support
- Each measurement becomes one row with metadata repeated

**Both** - Generate both formats for maximum flexibility

## Calculated Data Handling

**IMPORTANT:** Separate raw measurements from calculated/derived values.

- **Raw data** -> `measurement-document` (direct instrument readings)
- **Calculated data** -> `calculated-data-aggregate-document` (derived values)

Calculated values MUST include traceability via `data-source-aggregate-document`:

```json
"calculated-data-aggregate-document": {
  "calculated-data-document": [{
    "calculated-data-identifier": "SAMPLE_B1_DIN_001",
    "calculated-data-name": "DNA integrity number",
    "calculated-result": {"value": 9.5, "unit": "(unitless)"},
    "data-source-aggregate-document": {
      "data-source-document": [{
        "data-source-identifier": "SAMPLE_B1_MEASUREMENT",
        "data-source-feature": "electrophoresis trace"
      }]
    }
  }]
}
```

**Common calculated fields by instrument type:**
| Instrument | Calculated Fields |
|------------|-------------------|
| Cell counter | Viability %, cell density dilution-adjusted values |
| Spectrophotometer | Concentration (from absorbance), 260/280 ratio |
| Plate reader | Concentrations from standard curve, %CV |
| Electrophoresis | DIN/RIN, region concentrations, average sizes |
| qPCR | Relative quantities, fold change |

See `references/field_classification_guide.md` for detailed guidance on raw vs. calculated classification.

## Validation

Always validate ASM output before delivering to the user:

```bash
python scripts/validate_asm.py output.json
python scripts/validate_asm.py output.json --reference known_good.json  # Compare to reference
python scripts/validate_asm.py output.json --strict  # Treat warnings as errors
```

**Validation Rules:**
- Based on Allotrope ASM specification (December 2024)
- Last updated: 2026-01-07
- Source: https://gitlab.com/allotrope-public/asm

**Soft Validation Approach:**
Unknown techniques, units, or sample roles generate **warnings** (not errors) to allow for forward compatibility. If Allotrope adds new values after December 2024, the validator won't block them -- it will flag them for manual verification. Use `--strict` mode to treat warnings as errors if you need stricter validation.

**What it checks:**
- Correct technique selection (e.g., multi-analyte profiling vs plate reader)
- Field naming conventions (space-separated, not hyphenated)
- Calculated data has traceability (`data-source-aggregate-document`)
- Unique identifiers exist for measurements and calculated values
- Required metadata present
- Valid units and sample roles (with soft validation for unknown values)

## Supported Instruments

See `references/supported_instruments.md` for complete list. Key instruments:

| Category | Instruments |
|----------|-------------|
| Cell Counting | Vi-CELL BLU, Vi-CELL XR, NucleoCounter |
| Spectrophotometry | NanoDrop One/Eight/8000, Lunatic |
| Plate Readers | SoftMax Pro, EnVision, Gen5, CLARIOstar |
| ELISA | SoftMax Pro, BMG MARS, MSD Workbench |
| qPCR | QuantStudio, Bio-Rad CFX |
| Chromatography | Empower, Chromeleon |

## Detection & Parsing Strategy

### Tier 1: Native allotropy parsing (PREFERRED)
**Always try allotropy first.** Check available vendors directly:

```python
from allotropy.parser_factory import Vendor

# List all supported vendors
for v in Vendor:
    print(f"{v.name}")

# Common vendors:
# AGILENT_TAPESTATION_ANALYSIS  (for TapeStation XML)
# BECKMAN_VI_CELL_BLU
# THERMO_FISHER_NANODROP_EIGHT
# MOLDEV_SOFTMAX_PRO
# APPBIO_QUANTSTUDIO
# ... many more
```

**When the user provides a file, check if allotropy supports it before falling back to manual parsing.** The `scripts/convert_to_asm.py` auto-detection only covers a subset of allotropy vendors.

### Tier 2: Flexible fallback parsing
**Only use if allotropy doesn't support the instrument.** This fallback:
- Does NOT generate `calculated-data-aggregate-document`
- Does NOT include full traceability
- Produces simplified ASM structure

Use flexible parser with:
- Column name fuzzy matching
- Unit extraction from headers
- Metadata extraction from file structure

### Tier 3: PDF extraction
For PDF-only files, extract tables using pdfplumber, then apply Tier 2 parsing.

## Pre-Parsing Checklist

Before writing a custom parser, ALWAYS:

1. **Check if allotropy supports it** - Use native parser if available
2. **Find a reference ASM file** - Check `references/examples/` or ask user
3. **Review instrument-specific guide** - Check `references/instrument_guides/`
4. **Validate against reference** - Run `validate_asm.py --reference <file>`

## Common Mistakes to Avoid

| Mistake | Correct Approach |
|---------|-----------------|
| Manifest as object | Use URL string |
| Lowercase detection types | Use "Absorbance" not "absorbance" |
| "emission wavelength setting" | Use "detector wavelength setting" for emission |
| All measurements in one document | Group by well/sample location |
| Missing procedure metadata | Extract ALL device settings per measurement |

## Code Export for Data Engineers

Generate standalone Python scripts that scientists can hand off:

```python
# Export parser code
python scripts/export_parser.py --input "data.csv" --vendor "VI_CELL_BLU" --output "parser_script.py"
```

The exported script:
- Has no external dependencies beyond pandas/allotropy
- Includes inline documentation
- Can run in Jupyter notebooks
- Is production-ready for data pipelines

## File Structure

```
instrument-data-to-allotrope/
├── SKILL.md                          # This file
├── scripts/
│   ├── convert_to_asm.py            # Main conversion script
│   ├── flatten_asm.py               # ASM -> 2D CSV conversion
│   ├── export_parser.py             # Generate standalone parser code
│   └── validate_asm.py              # Validate ASM output quality
└── references/
    ├── supported_instruments.md     # Full instrument list with Vendor enums
    ├── asm_schema_overview.md       # ASM structure reference
    ├── field_classification_guide.md # Where to put different field types
    └── flattening_guide.md          # How flattening works
```

## Usage Examples

### Example 1: Vi-CELL BLU file
```
User: "Convert this cell counting data to Allotrope format"
[uploads viCell_Results.xlsx]