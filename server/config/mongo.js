import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://arnavmohan45678:RApzu38uKY@hackfest.oh1prfa.mongodb.net/?retryWrites=true&w=majority&appName=hackfest';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;
