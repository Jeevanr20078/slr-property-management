import Map "mo:core/Map";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = Map.empty<Text, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async Bool {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Name, email, and message are required fields.");
    };

    let inquiry : Inquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiries.add(Time.now().toText(), inquiry);
    true;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
