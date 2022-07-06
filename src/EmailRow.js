import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarOutline';
import LabelImporttantOutlinedIcon from '@material-ui/icons/LabelImportant';

import "./EmailRow.css";
import { useNavigate } from 'react-router-dom';

function EmailRow({id, title, subject, description, time}){
    const navigate = useNavigate();
    const goToMail = () => {
        navigate("/mail");
      };

    return(
        <div onClick={goToMail} className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImporttantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow___message'>
                <h4>
                    {subject}
                    <span className='emailRow__description'>{description}</span>
                </h4>
            </div>
            <p className='emailRow__time'>
                {time}
            </p>
        </div>
    );
}

export default EmailRow;