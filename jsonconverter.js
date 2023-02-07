import React from 'react';// for react


const fs = require('fs')

const data = JSON.parse(fs.readFileSync('arr.json'))//gets json file

function Converter(){
    //save data function - taken from videohttps://www.youtube.com/watch?v=L0dhB8KCgzA
    const SaveData = (data, file) =>{// takes data and saves it to a function
        const finished = (error) =>{
            if(error){
                console.error(error)
                return // catches error and does not save anything

            }
        }

        const jsonData = data// shows that it is json data 
        fs.writeFile(file, jsonData,finished)
        console.log('saved')// to tell me 
    }

    const saveEntry = (entry) => {
        const newEntry = {
            "Name": entry.Name, 
            "Money": entry.Money, 
            "Owed": entry.Owed
        }

        data[entry.name] = newEntry  // giving a key and passing in the entry
        SaveData(data, 'arr.json')
    
    }


    saveEntry(entrimage.pngy)





}
export default Converter
