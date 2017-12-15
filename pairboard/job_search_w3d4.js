let test = {
    home: {
        projects: {
            app_academy: {

            },
            job_search: {
                interview_questions: {
                    problems: {},
                    personal_pitch: {}
                }

            },
            towers_of_hanoi: {}
        },
        games: {
            nier_automata: {
                best_game_ever: {}
            },
            hangman: {
                is_not_an_interesting_game: {},
                to_be_honest: {}
            },
            league_of_legends: {
                is_not_as_bad_as_u_think: {}
            }
        }
    }
}

const JSONtoTree = (node, indent = "") => {
    let root = Object.keys(node)[0];
    console.log(indent + "-" + root)

    Object.values(node).forEach((value, index, arr) => {
        index === arr.length - 1 ? new_indent = "   " + indent :                             indent = "|  " + indent
        if (Object.values(value).length !== 0) {
          JSONtoTree(value, new_indent);
        }
    })
}
