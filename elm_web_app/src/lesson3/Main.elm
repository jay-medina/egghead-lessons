module Main exposing (..)

import Html exposing (text)


politely : String -> String
politely text =
    "Excuse me, " ++ text


ask : String -> String -> String
ask thing place =
    "is there a " ++ thing ++ " in the " ++ place ++ "?"


askPolitelyAboutFish =
    politely << ask "fish"


main =
    text <|
        askPolitelyAboutFish "car"
