#!/bin/bash

###### PCR BOT ########

# This will serve to generate update data to feed to pcr update bot
# modder: Ralph_Fonz

#######################

### Get Verb ###

while true; do
    echo -n "Enter [0 for Updating] or [1 for Updated] "; read updateTxt

    case $updateTxt in
    "") echo "You did not provide any resposnse";;
    0) 
        updateTxt=$"Updating"
        break;;
    1) 
        updateTxt=$"Updated"
        break;;
    *) echo "Not an option";;
    esac
done

### Get Server Text ###

while true; do
    echo -n "Enter Server [0 for Feature2], [1 for Trunk] or [2 for Custom Text Entry] "; read serverTxt
    case $serverTxt in
    "") echo "You did not provide any response";;
    0) # Feature2
        serverTxt=$"Feature2"
        break;;
    1) #Trunk
        serverTxt=$"Trunk"
        break;;
    2) #Custom Text
        while true; do
            echo -n "Enter Server Custom Text "; read serverTxt2
            case $serverTxt2 in
            "") echo "You did not provide any response";;
            *)
                serverTxt=$"$serverTxt2"
                break;;
            esac
        done
        break;;
    *) echo "Not an option";;
    esac
done

### Get Update Increment ###

while true; do
    echo -n "Enter increment or type NULL "; read incrementNumb
        case $incrementNumb in
        "") echo "You did not provide any response";;
        *) break;;
        esac    
done
echo ${incrementNumb^^}
if ((${incrementNumb^^} == "NULL" ))
then
    incrementNumb=$""
fi


####### Create JSON FILE #########

cat >./genStr.json <<EOF
{
    "verb": "${updateTxt}",
    "repo": "${serverTxt}",
    "increment": "${incrementNumb}"
}
EOF

# Check dep
npm -v

node updateBot.js