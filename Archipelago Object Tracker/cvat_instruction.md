# Create a dataset with video file using CVAT
In this project, CVAT is used to label the video file to create dataset for training YOLO model.<br />
https://cvat.org/
## Before you start
You can install CVAT on your machine or use an online version of CVAT.
### Install CVAT on local machine
You can save your data private if you use install CVAT in your local machine.<br />
https://github.com/openvinotoolkit/cvat
### Using online CVAT
Online version of CVAT requires an account to use, so create an account before you use it.
## How to use it
### Create a task
Before you label the video, you need to create a task.
1. Click the 'Tasks' button on the navigation bar at the top.<br />
![Create a Task 01](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/create_a_task.PNG)
2. Click the blue plus button at the right corner and select the 'Create a new task'.
3. Name your project.
4. Create some labels that will be used for annotation.
5. Upload the video file.<br />
![Create a Task 02](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/create_a_task2.PNG)
6. Submit.
7. The task will be saved under Tasks.<br />
![Tasks](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/tasks.PNG)
You can add more labels if you open the task.
### Label the video
1. Go to Jobs<br />
![Jobs](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/jobs.PNG)
2. Click the job.
3. Find the image where it has an object. [you can go next(f) or back(d) with arrow at the top]<br />
![Next](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/next.png)
![Back](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/back.png)
4. Click the rectangle button at the left side and click the shape button. [n is short cut to draw same label]<br />
![Draw a rectangle 01](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/draw_rectangle.PNG)
5. Draw the label around the object. You should label the clear object for better training dataset.<br />
![Draw a rectangle 02](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/draw_rectangle2.PNG)
6. Save your work before you leave. (Ctrl+s)
### Export data
1. Go to tasks.
2. Click 'Action' and select the 'Export task dataset'.<br />
![Export task 01](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/export_task.png)
3. Choose format of dataset and check the 'save images'.
4. Name the zip file.<br />
![Export task 02](https://github.com/alexanderqbos/Archipelago-Object-Tracking/blob/main/img/cvat/export_task2.png)
5. Click OK.
6. Wait for the process then choose the directory to save the .zip file.