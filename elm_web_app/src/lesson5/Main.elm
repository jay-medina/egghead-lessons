module Main exposing (..)

import Html exposing (text)
import List


type alias Person =
    { name : String
    , age : Int
    }


people =
    [ { name = "Jose", age = 2931 }
    , { name = "meow", age = 139 }
    ]


names : List Person -> List String
names =
    List.map (\peep -> peep.name)


findPerson : String -> List Person -> Maybe Person
findPerson name =
    let
        isPersonInList peep memo =
            case memo of
                Just _ ->
                    memo

                Nothing ->
                    if peep.name == name then
                        Just peep
                    else
                        Nothing
    in
    List.foldl
        isPersonInList
        Nothing


main : Html.Html msg
main =
    text <| toString <| findPerson "Jose" people
