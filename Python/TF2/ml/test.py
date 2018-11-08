import numpy as np
from sklearn.model_selection import train_test_split
X, y = np.arange(10).reshape((5, 2)), range(5)
X_train, X_test, y_train, y_test = train_test_split( X,y,shuffle=False, test_size=0.33, random_state=42)
print(y_test)
