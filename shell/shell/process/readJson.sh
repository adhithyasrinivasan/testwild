#!/bin/bash

#declare -a values                                                                                                                                                      

#while read -r line; do
#  [[ $line =~ :[[:blank:]]+\"(.*)\" ]] && values+=( "${BASH_REMATCH[1]}" )
#done < all.json                                                                                                                                          

#declare -p values # print the #array


#array=( $(sed -n "/{/,/}/{s/[^:]*:[[:blank:]]*//p;}" all.json ) )
array=( $(sed -n "/{/,/}/{s/[^:]*:[[:blank:]]*//p;}" all.json ) )

echo ${array[@]}
