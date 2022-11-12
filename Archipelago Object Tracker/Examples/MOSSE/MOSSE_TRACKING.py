import cv2
import numpy as np
    
tracker = cv2.legacy.TrackerMOSSE_create()

video = cv2.VideoCapture('./Examples/MOSSE/fish.avi')
# video = cv2.VideoCapture('./Examples/MOSSE/penguin.mp4')

ret, frame = video.read()

if not ret:
    print('cannot read the video')
# Select the bounding box in the first frame
bbox = cv2.selectROI(frame, False)
ret = tracker.init(frame, bbox)
# Start tracking
while True:
    ret, frame = video.read()
    # frame = cv2.resizeWindow("Tracking", int(frame_width * 2), int(frame_height * 2))
    if not ret:
        print('something went wrong')
        break
    timer = cv2.getTickCount()
    ret, bbox = tracker.update(frame)
    fps = cv2.getTickFrequency() / (cv2.getTickCount() - timer)
    if ret:
        p1 = (int(bbox[0]), int(bbox[1]))
        p2 = (int(bbox[0] + bbox[2]), int(bbox[1] + bbox[3]))
        cv2.rectangle(frame, p1, p2, (255,0,0), 2, 1)
    else:
        cv2.putText(frame, "Tracking failure detected", (10,80), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0,255),1)
    cv2.putText(frame, "MOSSE Tracker", (100,20), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,255,255),2)
    cv2.putText(frame, "FPS : " + str(int(fps)), (100,50), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,255,255),2)
    cv2.imshow("Tracking", frame)
    k = cv2.waitKey(120) & 0xff
    if k == 27 : break

video.release()
cv2.destroyAllWindows()