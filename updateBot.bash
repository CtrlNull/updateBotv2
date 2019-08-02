#!/bin/bash

###### PCR BOT ########

# This will serve to generate update data to feed to pcr update bot
# modder: Ralph_Fonz

#######################

## Get update details from user 

echo "Enter update string [Updated Trunk 22222], followed by [Enter]"

read updateStr
echo "$updateStr"
IFS=', ' read -r -a updateArr <<< "$updateStr"

for i in "${updateArr[0]}"
do
    echo "$i"
done

# Create Json file to list file details to be read by javascript bot
