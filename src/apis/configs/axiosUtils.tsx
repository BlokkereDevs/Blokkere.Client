// export function defineCancelApiObject(apiObject: any)
// {
//     const cancelApiObject: any = {}

//     Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) =>
//     {
//         const cancellationControllerObject = {
//             controller: undefined,
//         }

//         cancelApiObject[apiPropertyName] = {
//             handleRequestCancellation: () =>
//             {

//                 if (cancellationControllerObject.controller)
//                 {

//                     cancellationControllerObject.controller.abort()
//                 }

//                 cancellationControllerObject.controller = new AbortController()

//                 return cancellationControllerObject.controller
//             },
//         }
//     })

//     return cancelApiObject
// }