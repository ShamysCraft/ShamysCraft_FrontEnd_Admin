//api from material ui
import { createMuiTheme} from "@material-ui/core/styles"
import 'fontsource-roboto'

 const theme = createMuiTheme({
    typography:{
        h2:{
            fontSize:40,
            top:'25px',
            left: '50px',
            padding: '10px'
        }
    },
    
    palette:{
        
    },
    overrides:{
        MuiInputBase:{
            
        }
    }
})

 export default theme;