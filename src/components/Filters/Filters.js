import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import './Filters.css';

function Filters() {
    return (
        <div className="filterContainer" >
            <div>
            <TextField className="Filters" select variant="outlined" label="Company">
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
                </TextField>
                <TextField className="Filters" type="date" variant="outlined" />
                <TextField className="Filters" type="date" variant="outlined" />
            </div>
            <div><TextField className="Filters" select variant="outlined" label="History">
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
                <MenuItem key="aa" value="aa">aa</MenuItem>
                </TextField></div>
        </div>
    )
}

export default Filters
