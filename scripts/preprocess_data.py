import pandas as pd
import numpy as np
import json
from sklearn.preprocessing import LabelEncoder
import yaml
import os

print("📊 Starting data preprocessing...")

# Load configuration
with open('config/config.yaml', 'r') as f:
    config = yaml.safe_load(f)

# Load your JSON data
with open(config['data']['raw_path'], 'r', encoding='utf-8') as f:
    data = json.load(f)

# Convert to pandas DataFrame
df = pd.DataFrame(data)
print(f"✅ Loaded {len(df)} records")

# Basic cleaning
df = df.drop_duplicates(subset=['request_id'])
print(f"✅ Removed duplicates: {len(df)} records remaining")

# Create some simple features from the description
df['description_length'] = df['description'].str.len()
df['word_count'] = df['description'].str.split().str.len()

# Convert date
df['submission_date'] = pd.to_datetime(df['submission_date'])
df['submission_month'] = df['submission_date'].dt.month

# Count fraud indicators
df['fraud_indicators_count'] = df['fraud_indicators'].apply(lambda x: len(x) if isinstance(x, list) else 0)

# Select features for training
features = [
    'applicant_age', 
    'amount_requested', 
    'fraud_risk_score',
    'description_length',
    'word_count',
    'submission_month',
    'fraud_indicators_count'
]

# Keep only the columns we need
processed_df = df[features + ['urgency_level', 'fraud_predicted', 'category']]

# Remove any rows with missing values
processed_df = processed_df.dropna()
print(f"✅ Final cleaned data: {len(processed_df)} records")

# Save the processed data
processed_df.to_csv(config['data']['processed_path'], index=False)
print("✅ Saved processed data to:", config['data']['processed_path'])

print("🎉 Data preprocessing completed!")