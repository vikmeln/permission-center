import { Text, Button, FlatList } from "react-native";
import { useState } from "react";
import * as Contacts from "expo-contacts/legacy";
import PermissionCard from "./PermissionCard";

export default function ContactsPermission() {
  const [contacts, setContacts] = useState<Contacts.ExistingContact[]>([]);

  const showContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const result = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      setContacts(result.data);
    }
  };

  return (
    <PermissionCard>
      <Text style={{ fontSize: 22 }}>👤 Contacts</Text>
      <Text>Доступ до контактів пристрою</Text>
      <Button title="Allow Contacts" onPress={showContacts} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id ?? Math.random().toString()}
        renderItem={({ item }) => (
          <>
            <Text>{item.name}</Text>
            {item.phoneNumbers?.map((phone) => (
              <Text key={phone.id}>{phone.number}</Text>
            ))}
          </>
        )}
      />
    </PermissionCard>
  );
}
