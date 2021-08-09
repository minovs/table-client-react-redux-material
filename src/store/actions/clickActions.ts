import React from 'react'
import { Dispatch } from 'redux'
import { contentFetchData } from './contentActions'

const visitAction = async (method: string, name: string, classes: string) => {
  try {
    return await fetch(`${process.env.REACT_APP_API_URL}/api/visit`, {
      method: method,
      body: JSON.stringify({ name, classes }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    console.log(e)
  }
}

export const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  return async (dispatch: Dispatch<any>) => {
    const { name, classes, value } = e.currentTarget.dataset
    if (value === 'H') {
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined) {
        await visitAction('PUT', name, classes)
      }
    } else {
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined) {
        await visitAction('DELETE', name, classes)
      }
    }
    dispatch(contentFetchData(true))
  }
}
