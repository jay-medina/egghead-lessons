module Main exposing (..)

import Html exposing (text)


type alias Dog =
    { name : String
    , age : Int
    }


dog : Dog
dog =
    { name = "Spock"
    , age = 3
    }


renderDog : Dog -> String
renderDog dog =
    dog.name ++ ", " ++ toString dog.age


main : Html.Html msg
main =
    text <| renderDog dog
