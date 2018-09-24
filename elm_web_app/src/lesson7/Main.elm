module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (style)


numbers =
    [ 1, 2, 3, 4, 5 ]


printThing : a -> Html msg
printThing i =
    ul [] [ text <| toString i ]


fruits =
    [ { name = "Orange" }, { name = "Banana" } ]


main : Html.Html msg
main =
    ul [] (List.map printThing fruits)
