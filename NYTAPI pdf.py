from datetime import datetime
from os import write 
import requests, pprint, json
import  pathlib
import csv
import matplotlib.pyplot as plt
import numpy as np

#©©© Copyright Reserved Code of Brittney Matthew

#question: how many articles about 'diet' have been written in the span of [6 years] every new year resolution.
#ETL PROCESS- EXTRACT TRANSFORM LOAD 

#EXTRACT
base_url='https://api.nytimes.com/svc/search/v2/articlesearch.json'
# using the params parameter from the requests.get() method to pass in the API key and query
parameters={'q':'diet', 'api-key': 'WU8iszA33rPw8ZIlhA4S9WqJ1Evgy9uS'}
response=requests.get(base_url,params=parameters)
content=response.json()
#how content - expanded
print(response.json())
pprint.pprint(content)
content=response.json()
print(content['response']['meta']['hits'])

#STEP -- EXTRACT: filtering the data
#-----------------------
parameters['page']= 0
response=requests.get(base_url,params=parameters)
print(parameters)
#-----------------------
#STEP -- EXTRACT: filtering the data 
parameters['fq']='document_type:("article")AND section_name:("Health")'

d_sn_filter='document_type:("article")AND section_name:("Health")' #1601 based on the date specified

parameters['fq']= d_sn_filter

#dates- the following date span references the total of diet articles from 16'-21'
parameters['begin_date']='20160101'
parameters['end_date']='20210101'
parameters['page']= 0
print(parameters)

#below shows results: if searched - it should be 90,000 average
response=requests.get(base_url,params=parameters) 
content=response.json()
print(content['response']['meta']['hits'])

#TRANSFORM PROCESS
python_data=[parameters]
# putting it altogether
for i in content['response']['docs']:
    pub_date=i['pub_date']
for v in i['keywords']:
    keyword=v['value']
    web_url=i['web_url']
python_data.append({'keyword':keyword, 'web_url':web_url, 'pub_date':pub_date})
    #print(python_data)
print(pub_date)
print(keyword)
print(web_url)
    
    


#LOAD --
#2016 data start to 2021 end date - result show in a line graph using matplotlib
plt.plot([2016,2021], [91372,292])
plt.ylabel('Number of Articles')
plt.xlabel('Span of Years') 
plt.show() 
#results of matplotlib--> loaded into a CSV W/ HEADER

#taking the info from the printed data & turning it into a list of list       
#CSV file below will show the matplotlib chart in a csv format - w/ specific numbers of the amount articles & year
#Below is the info based on the line graph- since it reproduces in decimal form- it's rounded the average amount but the decimal is listed as a note.
#CSV file will not automatically open like line graph- to see CSV file- it will need to be manually opened
nyt_data_info=[
{"Article Year":"2016","Articles Amount":91372}, #9.26 in decimial the following numbers in between will be rounded
{"Article Year":"2017","Articles Amount":7000}, #7.17
{"Article Year":"2018","Articles Amount":6000}, #5.73 
{"Article Year":"2019","Articles Amount":4000}, #3.79
{"Article Year":"2020","Articles Amount":2000},#1.71
{"Article Year":"2021","Articles Amount":292} ] #5.e + 03 

path_temp = pathlib.Path.cwd()
file_path= path_temp/"nytData.csv"
file = file_path.open(mode='w', encoding='utf-8',newline="")
writer=csv.DictWriter(file,fieldnames=["Article Year","Articles Amount"])
#below makes header- row
writer.writeheader()
#below makes the rows to the file
writer.writerows(nyt_data_info)
file.close()

