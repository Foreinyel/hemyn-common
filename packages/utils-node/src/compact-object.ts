import _ from 'lodash'
export const compactObject = (obj: {
  [k: string]: any
}) => {

  let newObj = _.omitBy(obj, _.isUndefined)
  newObj = _.omitBy(newObj, _.isNull)
  newObj = _.omitBy(newObj, (val: any) => val === '')

  return newObj;

}