# 3d-model
3d-model for self-learning (using https://github.com/rastapasta/react-native-gl-model-view)

Please look the top-left corner in the app. It shows that the textureURI (state) is changed but it has no effect on the <ModelView/>.

Also, <ModelView/> component will be console.logged when the textureURI is changed. It states that the uri of texture inside <ModelView/> is updated. However, the model is still the same.

If I change the rotateX to a different angle, it works!. Only changing uri of model OR texture inside <ModelView/> does not work.

Hmm, it's strange...
