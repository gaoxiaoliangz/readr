import _ from 'lodash';
export default function objectToUrlencoded(originalObj) {
    let object = _.cloneDeep(originalObj);
    let encodedurl = '';
    for (let prop in object) {
        if (typeof object[prop] === 'object') {
            object[prop] = object[prop].toString();
        }
        encodedurl = `${encodedurl}${prop}=${object[prop]}&`;
    }
    return encodedurl.substr(0, encodedurl.length - 1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VG9VcmxlbmNvZGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC91dGlscy9vYmplY3RUb1VybGVuY29kZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sQ0FBQyxNQUFNLFFBQVE7QUFFdEIsMkNBQTJDLFdBQVc7SUFDcEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNyQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7SUFFbkIsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUEsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDeEMsQ0FBQztRQUVELFVBQVUsR0FBRyxHQUFHLFVBQVUsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMifQ==