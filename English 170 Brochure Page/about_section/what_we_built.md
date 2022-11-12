## What we built
### Object Tracker
We built object tracker using OpenCV's CSRT (Channel and Spatial Reliability Tracking) model.
CSRT model has residence of overlapping by other object and better accuracy than other OpenCV's tracker, so we picked this model for tracker.
It tracks the object that is selected by user.
![Object Tracker Example](https://github.com/alexanderqbos/English-170-Brochure-Page/blob/Dev/source/object_tracker_ex.gif)
### Object Detector
We built object detector using YOLO (You Only Look Once) machine learning model.
We trained YOLOv4 model with some fish and hooks. It took quiet a long time to train the model to have higher accuracy to detect the object.
It draws bounding boxes around the objects when YOLO model detects the objects and display confidence value.
![Object Detector Example](https://github.com/alexanderqbos/English-170-Brochure-Page/blob/Dev/source/object_detector_ex.gif)
### Object Tracker combined with Detector
explanation
![DIY Tracker Example](/../source/object_detector_ex.gif "DIY Tracker Example")