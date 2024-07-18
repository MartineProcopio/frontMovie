import './hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
  return (
    <div className ='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie)=>{
                    return(
                        <Paper>
                             <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.thumbnail.path+'.'+movie.thumbnail.extension})`}} >
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={ movie.thumbnail.path+'.'+movie.thumbnail.extension} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                    <Link to={`${movie.urls[0].url}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero