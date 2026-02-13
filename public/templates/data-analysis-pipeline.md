# Data Analysis Pipeline

## Command
`/data-analysis [data file]` — Start end-to-end analysis

## Pipeline Phases

### Phase 1: Data Exploration
**Goals**: Understand the data before modeling

Steps:
1. Load and inspect structure (rows, columns, types)
2. Check for missing values, duplicates, outliers
3. Generate summary statistics (mean, sd, range)
4. Visualize distributions (histograms, box plots)
5. Document data quality issues

Output: `output/01-exploration-report.md`

### Phase 2: Data Cleaning
**Goals**: Prepare analysis-ready dataset

Steps:
1. Handle missing values (drop, impute, flag)
2. Address outliers (winsorize, remove, keep with flag)
3. Create derived variables
4. Ensure correct data types
5. Document all transformations

Output: `data/clean/[dataset]-clean.csv` + `output/02-cleaning-log.md`

### Phase 3: Descriptive Analysis
**Goals**: Summarize key patterns

Steps:
1. Create summary tables by key groups
2. Generate correlation matrix
3. Produce visualizations (scatter, bar, line)
4. Test for group differences (t-tests, ANOVA)
5. Document notable patterns

Output: `output/03-descriptive-analysis.md`

### Phase 4: Regression Analysis
**Goals**: Test hypotheses with models

Steps:
1. Define model specifications
2. Run baseline model
3. Add controls progressively
4. Test robustness (different specs, samples)
5. Check assumptions (residuals, heteroskedasticity)

Output: `output/04-regression-results.md` + tables

### Phase 5: Publication Outputs
**Goals**: Create polished, publication-ready outputs

Steps:
1. Format tables (APA, journal style)
2. Create high-quality figures (300 DPI)
3. Export to required formats (PNG, PDF, LaTeX)
4. Generate reproducible scripts

Output: `output/figures/` + `output/tables/`

## Analysis Standards

### Missing Data
- Document % missing per variable
- If >5% missing, investigate mechanism (MCAR/MAR/MNAR)
- Always report how missing data was handled

### Variable Naming
- Use lowercase_with_underscores
- Be descriptive: `age_years` not `age`, `income_annual_usd` not `inc`
- Binary variables: `is_[condition]` or `has_[feature]`

### Reproducibility Requirements
- Set random seed at script start
- Save intermediate datasets
- Version control all scripts
- Document package versions

### Output Naming
```
output/
├── figures/
│   ├── fig01-[description].png
│   ├── fig02-[description].png
│   └── ...
├── tables/
│   ├── tab01-[description].csv
│   └── ...
└── reports/
    ├── 01-exploration.md
    └── ...
```

## Quality Checks

Before reporting results:
- [ ] Sample sizes match across tables
- [ ] Summary stats are plausible
- [ ] Coefficients have expected signs
- [ ] Standard errors reasonable (not 0 or huge)
- [ ] R² in reasonable range
- [ ] Robustness checks don't flip main results
