import fnmatch
import os
import sys

dir_path = sys.argv[1]
del_count = 0
rest_count = 0

for file in os.listdir(dir_path):
    if fnmatch.fnmatch(file, '*.txt'):
        file_size = os.stat(dir_path + file)
        if file_size.st_size <= 0:
            f_name = file.split(".")
            os.remove(dir_path + file)
            os.remove(dir_path + f_name[0] + '.png')
            del_count += 1
        else:
            rest_count += 1
print("deleted data " + str(del_count))
print("remained data " + str(rest_count))