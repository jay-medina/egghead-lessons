module Main exposing (..)

import Html exposing (text)


type alias Person =
    { name : String
    , age : Int
    }


people : List Person
people =
    [ { name = "Jose", age = 2931 }
    , { name = "Gimli", age = 139 }
    ]


names : List Person -> List String
names peeps =
    List.map .name peeps


nameExist : String -> Person -> Maybe Person -> Maybe Person
nameExist name peep memo =
    case memo of
        Just _ ->
            memo

        Nothing ->
            if peep.name == name then
                Just peep
            else
                Nothing


findPerson : String -> List Person -> Maybe Person
findPerson name peeps =
    List.foldl (nameExist name) Nothing peeps


main : Html.Html msg
main =
    text <| toString <| findPerson "Jose" people
