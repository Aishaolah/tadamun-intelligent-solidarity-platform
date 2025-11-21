import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import yaml

print("🤖 Starting model training...")

# Load configuration
with open('config/config.yaml', 'r') as f:
    config = yaml.safe_load(f)

# Load processed data
df = pd.read_csv(config['data']['processed_path'])
print(f"📊 Training on {len(df)} records")

# Define features (X) and targets (y)
feature_columns = [
    'applicant_age', 'amount_requested', 'fraud_risk_score',
    'description_length', 'word_count', 'submission_month', 'fraud_indicators_count'
]

X = df[feature_columns]
y_urgency = df['urgency_level']      # Low, Medium, High, Critical
y_fraud = df['fraud_predicted']      # 0 or 1  
y_category = df['category']          # Medical, Education, etc.

print("🎯 Training 3 AI models...")

# Model 1: Urgency Prediction
print("\n1. 🔥 Training Urgency Prediction Model...")
X_train, X_test, y_train, y_test = train_test_split(X, y_urgency, test_size=0.2, random_state=42)
urgency_model = RandomForestClassifier(n_estimators=100, random_state=42)
urgency_model.fit(X_train, y_train)
urgency_predictions = urgency_model.predict(X_test)
urgency_accuracy = accuracy_score(y_test, urgency_predictions)
print(f"   Urgency Model Accuracy: {urgency_accuracy:.2%}")

# Model 2: Fraud Detection  
print("\n2. 🕵️ Training Fraud Detection Model...")
X_train, X_test, y_train, y_test = train_test_split(X, y_fraud, test_size=0.2, random_state=42)
fraud_model = RandomForestClassifier(n_estimators=100, random_state=42)
fraud_model.fit(X_train, y_train)
fraud_predictions = fraud_model.predict(X_test)
fraud_accuracy = accuracy_score(y_test, fraud_predictions)
print(f"   Fraud Model Accuracy: {fraud_accuracy:.2%}")

# Model 3: Category Prediction
print("\n3. 📁 Training Category Prediction Model...")
X_train, X_test, y_train, y_test = train_test_split(X, y_category, test_size=0.2, random_state=42)
category_model = RandomForestClassifier(n_estimators=100, random_state=42)
category_model.fit(X_train, y_train)
category_predictions = category_model.predict(X_test)
category_accuracy = accuracy_score(y_test, category_predictions)
print(f"   Category Model Accuracy: {category_accuracy:.2%}")

# Save all models
joblib.dump(urgency_model, config['models']['urgency_model'])
joblib.dump(fraud_model, config['models']['fraud_model']) 
joblib.dump(category_model, config['models']['category_model'])

print("\n✅ All models saved!")
print("📁 Models location: models/")
print("🎉 Training completed!")