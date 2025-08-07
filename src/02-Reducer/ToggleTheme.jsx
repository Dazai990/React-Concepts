import { useReducer } from "react";

const initialState = {theme: 'light', count: 0}

function toggleReducer(state,action){
    switch(action.type){
      case 'Toggle':
        return {
            theme : state.theme === 'light' ? 'dark' : 'light',
            count : state.count + 1
        };
        default: return state;
    }}
    const ToggleTheme = ()=>{
        const [state,dispatch] = useReducer(toggleReducer,initialState)
        const isLight = state.theme === 'light';
        const container = {backgroundColor:isLight? '#fff':'#000',color:isLight? '#000':'#fff', transition:'all 0.5s ease',textAlign:'center',
            padding:'50px',minHeight:'100vh',width:'100%'};
        const buttonStyle = {backgroundColor: isLight? '#ddd':'#fff', color: '#000', padding:'12px 24px',borderRadius:'18px',border:'none',
            fontSize:'16px', transition:'all 0.3s ease'};
        const icon = isLight? '🌞':'🌙';

        return(
            <div style={container}>
            <h2>{state.theme.toUpperCase()} MODE</h2>
                <button style={buttonStyle} onClick={()=> dispatch({type:'Toggle'})}>
                    {icon} <span style={{fontFamily:'monospace'}}>Toggle Theme</span>
                </button>
            </div>
        )
    }
    export default ToggleTheme;