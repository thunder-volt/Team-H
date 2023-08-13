"""
Created on Thu Jun 11 22:34:20 2020
@author: Krish Naik
"""

from __future__ import division, print_function
from imp import load_module
# coding=utf-8
import numpy as np

import jsonpickle
from flask_cors import CORS, cross_origin
# Rest of your code here

# Flask utils
from flask import Flask ,request
#from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
# Model saved with Keras model.save()
# MODEL_PATH = '/Users/subhamsagar/VS_C++/PYTHON Deployment/Python_img_deployment/model_resnet50.h5'

# Load your trained model
# model = load_module(MODEL_PATH)


# def model_predict(x, model):
    
#     preds = model.predict(x)

#     return preds


@app.route('/predict', methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.get_json()
        # arr=[]
        # arr[0]=f.id
        # arr[1]=f.type
        # arr[2]=f.locality
        # arr[3]=f.activation_date
        # arr[4]=f.latitude
        # arr[5]=f.longitude
        # arr[6]=f.lease_type
        # arr[7]=f.gym
        # arr[8]=f.lift
        # arr[9]=f.swimming_pool
        # arr[10]=f.negotiable
        # arr[11]=f.furnishing
        # arr[12]=f.parking
        # arr[13]=f.property_size
        # arr[14]=f.property_age
        # arr[15]=f.bathroom
        # arr[16]=f.facing
        # arr[17]=f.cup_board
        # arr[18]=f.floor
        # arr[19]=f.total_floor
        # arr[20]=f.amenities
        # arr[21]=f.water_supply
        # arr[22]=f.building_type
        # arr[23]=f.balconies
        # arr[24]=f.rent
        # numpy_array = np.array(arr)
        # Make prediction
        # preds = model_predict(numpy_array, model)
        # result = preds
        # return result
        print(f)
        return jsonpickle.encode(1)
    return jsonpickle.encode(1)



if __name__ == '__main__':
    app.run(debug=True)
