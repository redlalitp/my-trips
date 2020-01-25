import Transform from '@ember-data/serializer/transform';

export default class ReadableDateTransform extends Transform {
  deserialize(serialized) {
    return serialized.toDate();
  }

  serialize(deserialized) {
    deserialized = deserialized.toDate();
    return deserialized;
  }
}
