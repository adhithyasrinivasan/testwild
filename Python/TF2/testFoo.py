import pandas as pd
from sklearn.linear_model import LogisticRegression
df1 = pd.DataFrame({'x1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'x2': [0, 0, 1, 0, 0, 1, 0, 0, 1, 0]})
df2 = pd.DataFrame({'x1': [11,12,13,14,15,16,17,18,19,20]})
X = df1[['x1' ]]
y = df1['x2']
model = LogisticRegression()
model.fit(X, y)
model.predict(df2)
