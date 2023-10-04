import React from 'react'

import CustomButton from './CustomButton'
import state from '../store';

const FilePicker = ({ file, setFile, readFile, updateDecalPosition }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>

        <CustomButton 
          type="filled"
          title="Posición Inicial"
          handleClick={() => {state.position = [0, 0.04, 0.15]
          state.scale = 0.15}}
          customStyles="text-xs"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
       
        <CustomButton 
          type="outline"
          title="P1"
          handleClick={() => {
            state.position =[0, 0, 0.1]
          state.scale = 0.1}}
          customStyles="text-xs"
        />
        <CustomButton 
          type="outline"
          title="P2"
          handleClick={() => {
            state.position =[0.02, -0.2, 0.1]
            state.scale = 0.2}}
          customStyles="text-xs"
        />
        <CustomButton 
          type="outline"
          title="P3"
          handleClick={() => {
            state.position =[0.06, 0.09, 0.13]
            state.scale = 0.06}}
          customStyles="text-xs"
        />
        <CustomButton 
          type="outline"
          title="P4"
          handleClick={() => {
            state.position =[0, 0.06, 0.15]
            state.scale = 0.06}}
          customStyles="text-xs"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="filled"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker