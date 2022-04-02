export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQBhOSUq0usTJiYmtFgNDejcKmwRCogBo8IOUWRnPvuhrVeJZtN76VKyBV9HiuJmFp4Z7t-sC-9OqgeqwpPVRx02DvYNLg3YIcW0wLHTgO1QNtmwwK3bRE1Wk9qggm7_0ZwyOzh-S3eIYcgZxnkP01POlUAqU58",


} ;
const reducer=(state,action)=>{
    console.log(action);

    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
              };
        case "SET_PLAYLISTS":
                return{
                ...state,
                playlists:action.playlists,
                };
        case "SET_DISCOVER_WEEKLY":
                return{
                ...state,
                discover_weekly:action.discover_weekly,
                 };
          default:
            return state;
        }

}
export default reducer;