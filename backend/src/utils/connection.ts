import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/vehicles', { useNewUrlParser: true });

export default mongoose;
