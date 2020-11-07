#https://developer.marvel.com/account

import requests
import hashlib
import json
import tkinter as tk
# Importing all exposed tkinter objects into the namespace
from tkinter import *


MyWindow = tk.Tk()
MyWindow.title("Welcome")
MyWindow.geometry('750x450')
MyWindow.configure(bg='orange')

name = tk.Label(bg='orange')
description = tk.Label(bg='orange')

name.grid(row=1, column=0)
description.grid(row=2, column=0)

def getKeys():
	keys = open("key.txt", "r")
	publicKey = keys.readline().strip()
	privateKey = keys.readline().strip()
	keys.close()
	key = [privateKey, publicKey]
	return key

def getHash(publicKey, privateKey):
	key = "1" + privateKey + publicKey
	result = hashlib.md5(key.encode())
	return result.hexdigest()

key = getKeys()
publicKey = key[1]
result = getHash(key[1], key[0])

url = "https://gateway.marvel.com:443/v1/public/characters?name=hulk&ts=1&apikey="+publicKey+"&hash="+result
response = requests.get(url)
#print (response.text)

data = json.loads(response.text)
name.config(text=(data['data']['results'][0]['name']))
description.config(text=(data['data']['results'][0]['description']))





url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=T&orderBy=name&ts=1&apikey="+publicKey+"&hash="+result
response = requests.get(url)
data = json.loads(response.text)

for character in data['data']['results']:
	print (character['name'])
	print (character['description'])
