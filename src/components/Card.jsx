import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { dataContext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { MdPlaylistRemove } from "react-icons/md";
import { AddLiked, RemoveLiked } from '../redux/LikedSlice';
import { GoHeartFill } from "react-icons/go";

const Card = ({ name, image, singer, songIndex }) => {

    let { playSong,index,setIndex } = useContext(dataContext)
    let dispatch = useDispatch()
    let gaana = useSelector(state=>state.playlist)
    const songExistInPlaylist = gaana.some((song) => song.songIndex === songIndex)
    let likedSong = useSelector(state => state.liked)
    const songExistInLiked = likedSong.some((song) => song.songIndex === songIndex)



  return (
    <div className='w-[90%] h-[70px] md:h-[120px] bg-gray-800 rounded-lg p-[5px] md:p-[10px] flex justify-center items-center hover:bg-gray-600 transition-all '>
        {/* left side */}
        <div className='flex justify-start items-center gap-[20px] w-[80%] h-[100%] cursor-pointer'onClick={()=>{
            playSong()
            setIndex(songIndex)
        }}>
            <div>
                <img src={image} alt="" className='w-[60px] max-h-[60px]  md:max-h-[100px] md:w-[100px] rounded-lg'/>
            </div>
            <div className='text-[15px] md:text-[20px]'>
          <div className='text-white text-[1.1em] font-semibold '>{name}</div>
          <div className='text-gray-400 text-[0.7em] font-semibold'>{singer}</div>
            </div>
        </div>
        {/* right side */}
        <div className='flex justify-center items-center gap-[20px] w-[20%] h-[100%] text-[15px] md:text-[20px]'>
        {!songExistInPlaylist && (<div onClick={() => {
          dispatch(AddSong({ name: name, image: image, singer: singer, songIndex: songIndex }))
        }}>
          <MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer' />
        </div>)}
        {songExistInPlaylist && (<div onClick={() => {
          dispatch(RemoveSong(songIndex))
        }}>
          <MdPlaylistRemove className='text-white text-[1.5em] cursor-pointer' />
        </div>)}
            {/* heart icon */}
        {!songExistInLiked && (<div onClick={() => {
          dispatch(AddLiked({ name: name, image: image, singer: singer, songIndex: songIndex }))
        }}>
          <GoHeart className='text-white text-[1.3em] cursor-pointer' />
        </div>)}
        {songExistInLiked && (<div onClick={() => {
          dispatch(RemoveLiked(songIndex))
        }}>
          <GoHeartFill className='text-white text-[1.3em] cursor-pointer' />
        </div>)}
        </div>
    </div>
  )
}

export default Card