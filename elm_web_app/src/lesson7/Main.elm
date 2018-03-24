module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (style)


numbers =
    [ 1, 2, 3, 4, 5 ]



-- printNumbers : Int -> Html msg
-- printNumbers num =
--     div [] [ text <| toString num ]


printThing : thing -> Html msg
printThing thing =
    div [] [ text <| toString thing ]


fruits =
    [ { name = "Orange" }, { name = "Bananas" } ]


main : Html.Html msg
main =
    div [ style [ ( "padding", "2rem" ) ] ] (List.map printThing fruits)
