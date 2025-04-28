import cv2

capture = cv2.VideoCapture('icouldnthelpbutlook.mp4')
 
frameNr = 0
  
while (True):

    success, frame = capture.read()

    if not success:
        break

    frameName = ''

    if(frameNr < 10):
        frameName = f'frame_0{frameNr}.jpg'
    else:
        frameName = f'frame_{frameNr}.jpg';    

    cv2.imwrite(frameName, frame)

    frameNr = frameNr+1

capture.release()