import string
from gooey import Gooey, GooeyParser
import cv2
import os
import logging
import sys
import argparse

# Commandline Argument 1: the video file
video = None
# Commandline Argument 2: the path
output_file_location = None
# Commandline Argument 3: the datafile type
output_file_type = None

# if there is at least 1 Commandline argument, the first being the video
# if len(sys.argv) == 2:
#     video = sys.argv[1]
# # if there is at least 2 Commandline arguments, the second being the path
# if len(sys.argv) == 3:
#     video = sys.argv[1]
#     output_file_location = sys.argv[2]
# if there is at least 3 Commandline arguments, the third and final being the type
#if len(sys.argv) == 4:
# video = sys.argv[1]
# output_file_location = sys.argv[2]
# output_file_type = sys.argv[3]

## Create and configure logger
logging.basicConfig(filename = "test.log", level = logging.DEBUG)
logger = logging.getLogger()

# To be activated every time a new object is detected
def input(species, begin, end, direction):
    f.write("\nObject: " + species)
    f.write("\nTime Stamp Start: " + begin)
    f.write("\nTime Stamp End: " + end)
    f.write("\nDirection: " + direction + "\n")

    # During Execution.
    logger.info("Created new trackable object: {}".format(species))
    logger.info("{}-{}".format(begin, end))
    logger.info("Direction: {}".format("Onboard"))

@Gooey(program_name="Object Detection", 
        required_cols=1, 
        default_size=(600,650),
        progress_regex=r"^progress: (?P<current>\d+)/(?P<total>\d+)$",
        progress_expr="current / total * 100",
        timing_options = {
            'show_time_remaining': True,
            'hide_time_remaining_on_complete': False
        }
        )
def parse_args():
    parser = GooeyParser(description="Archipelago's very own Video Processing Software")
    ## To find the video.
    parser.add_argument('Video', help="Browse to select video for processing", widget="FileChooser")
    ## Output directory for the resulting dataset.
    parser.add_argument('Directory', help="Select folder for saving outputted data", widget="FileSaver", gooey_options={'wildcard':"Data files (*.csv, *.xlsx)|*.csv|Comma Separated Value (*.csv)|*.csv|Excel Spreadsheet (*.xlsx)|*.xlsx|Javascript Object Notation (*.json)|*.json|Extensible Markup Language (*.xml)|*.xml"})
    ## The output type for the dataset when created.
    parser.add_argument('Type', help="Select file type for outputted Data", widget="Dropdown", choices=[".csv", ".xlsx", ".json", ".xml"], default=".csv")
    return parser.parse_args()
print("GUI")

# If there are no Commandline arguments, the Gooey GUI loads as normal
if len(sys.argv) == 1:
    
    args = parse_args()
    ## Use formats like args.Video to get the value...after the fact.

    print("Here")

    # What the GUI is supposed to run.
    with open(args.Directory, "w") as f:
        print("There")
        # Find the video name
        filename = str(args.Video)
        f.write(filename + "\n")

        # Find the video duration
        clip = cv2.VideoCapture(args.Video)
        framecount = clip.get(cv2.CAP_PROP_FRAME_COUNT)
        fps = clip.get(cv2.CAP_PROP_FPS)
        duration = float(framecount) / float(fps)
        f.write(str(duration) + "\n")

        # Input format into export file    
        input("Halibut", "00:01:22:05", "00:02:01:48", "Onboard")
        input("Cod", "00:01:35:13", "00:02:03:50", "Onboard")
        input("Other", "00:02:52:11", "00:02:52:18", "Offboard")
        input("Crab Trap", "00:03:08:51", "00:03:51:17", "Onboard")

        # Post Execution.
        logger.info("Elapsed time: {:.2f}".format(300))
        logger.info("Approx. FPS: {:.2f}".format(30))
        logger.info("Cleaning up...")
        # Handler.
        logger.exception("Got exception on main handler.")
    print("Complete")
else:
    
    parser = argparse.ArgumentParser()
    parser.add_argument('video', type=string)
    parser.add_argument('file_path', type=string)
    parser.add_argument('file_type', type=string)

    args = parser.parse_args()

    video = args.video
    output_file_location = args.file_path
    output_file_type = args.file_type

    # If there are any arguments (hopefully all).
    print("Video: " + str(video))
    print("Output_path: " + str(output_file_location))
    print("Output_type: " + str(output_file_type))

    filename = str(os.path.basename(os.path.splitext(video)[0]) + "_data" + output_file_type)
    f = open(filename, "x")
    f.write(str(video) + "\n")

    clip = cv2.VideoCapture(video)
    framecount = clip.get(cv2.CAP_PROP_FRAME_COUNT)
    fps = clip.get(cv2.CAP_PROP_FPS)
    duration = float(framecount) / float(fps)
    f.write(str(duration) + "\n")

    input("Halibut", "00:01:22:05", "00:02:01:48", "Onboard")
    input("Cod", "00:01:35:13", "00:02:03:50", "Onboard")
    input("Other", "00:02:52:11", "00:02:52:18", "Offboard")
    input("Crab Trap", "00:03:08:51", "00:03:51:17", "Onboard")

    # Post Execution.
    logger.info("Elapsed time: {:.2f}".format(300))
    logger.info("Approx. FPS: {:.2f}".format(30))
    logger.info("Cleaning up...")
    # Handler.
    logger.exception("Got exception on main handler.")