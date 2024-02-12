import { render } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas en <GifItem/>', () => { 
    test('debe hacer match con el snapshot', () => { 
        render ( GifItem )
     })
 })