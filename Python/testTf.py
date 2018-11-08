import tensorflow as tf

x=tf.constant([1.0,1.1,1.2,1.3,1.4,1.5,1.6])

with tf.Session() as sess:
	output=sess.run(tf.round(x))
	print(output)


