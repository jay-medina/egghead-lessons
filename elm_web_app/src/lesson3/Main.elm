module Main exposing (..)

import Html exposing (text)


politely : String -> String
politely phrase =
    "Excuse me, " ++ phrase


ask : String -> String -> String
ask thing place =
    "is there a " ++ thing ++ " in the " ++ place ++ "?"


askPolitelyABoutFish : String -> String
askPolitelyABoutFish =
    politely << ask "fish"


main : Html.Html msg
main =
    text <| askPolitelyABoutFish "house"
