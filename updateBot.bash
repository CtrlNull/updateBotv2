#!/bin/bash

###### PCR BOT ########

# This will serve to generate update data to feed to pcr update bot
# modder: Ralph_Fonz

#######################

### Get Verb ###

while true; do
    echo -n "Enter [0 for Updating] or [1 for Updated]"; read updateTxt

    case $updateTxt in
    "") echo "You did not provide any resposnse";;
    0) 
        updateText=$"Updating"
        break;;
    1) 
        updateText=$"Updated"
        break;;
    *) echo "Not an option";;
    esac
done

### Get Server Text ###

while true; do
    echo -n "Enter Server [0 for Feature2], [1 for Trunk] or [2 for Custom Text Entry]"; read serverTxt
    case $serverTxt in
    "") echo "You did not provide any response";;
    0)
        serverTxt=$"Feature2"
        break;;
    1)
        serverTxt=$"Trunk"
        break;;
    2)
        serverTxt=$"CUSTOM"
        break;;
    *) echo "Not an option"
    esac
done


if ((${serverTxt^^} = "CUSTOM" ))
then
    while true; do
        echo -n "Enter Server Custom Text"; read serverTxt
        case $serverTxt in
        "") echo "You did not provide any response";;
        *) break;;
        esac
    done
fi

### Get Update Increment ###

while true; do
    echo -n "Enter increment or type NULL"; read incrementNumb
        case $incrementNumb in
        "") echo "You did not provide any response";;
        *) 
            break;;
        esac    
done

if ((${incrementNumb^^} = "NULL" ))
then
    incrementNumb=$""
fi


####### Create JSON FILE #########

cat >./config.json <<EOF
{
    "verb": "${updateTxt}",
    "repo": "${serverTxt}",
    "increment": "${incrementNumb}"
}
EOF

# Check dep
npm -v
read npmVersion
echo "$npmVersion"
echo "$npmVersion"
echo "$npmVersion"
echo "$npmVersion"