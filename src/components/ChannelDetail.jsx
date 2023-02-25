
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos, ChannelCard} from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id} = useParams()

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])

  return (
    <Box>
      <div style={{
        background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3184,1) 100%, rgba(0,212,255,1) 100%)'

      }}
      />

    </Box>
  )
}

export default ChannelDetail