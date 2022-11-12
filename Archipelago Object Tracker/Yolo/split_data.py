import glob
import sys

dir_path = sys.argv[1]
saving_dir = dir_path.split("/")[0]

imglist = glob.glob(dir_path + "*.png", recursive=False)

train = open(saving_dir + "/train.txt", "w")
valid = open(saving_dir + "/valid.txt", "w")

count_img = 0
count_train = 0
count_valid = 0
count = 0

for img in imglist:
    count_img += 1
    count += 1
    img = img.replace("\\", "/")
    if count == 6:
        valid.write(img + '\n')
        count = 0
        count_valid += 1
    else:
        train.write(img + '\n')
        count_train += 1

print("total: " + str(count_img))
print("training dataset: " + str(count_train))
print("validation dataset: " + str(count_valid))