import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';


function SkillsSect () {
    const [selected, setSelected] = useState('');

    useEffect(() => {
      console.log(selected)
    }, [selected])
    
    return (

        <div className=' '>
            <ReactFlagsSelect
        selected={selected}
        onSelect={code => setSelected(code)}
        searchable={true}
        id="flags-select"
        />
        </div>
        

        
    )
}

export default SkillsSect;