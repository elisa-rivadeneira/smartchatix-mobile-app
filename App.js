import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📱 SmartChatix</Text>
          <Text style={styles.headerSubtitle}>Tu Coach Personal</Text>
        </View>

        {/* Welcome Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¡Bienvenido a SmartChatix!</Text>
          <Text style={styles.cardDescription}>
            Tu asistente personal de coaching ahora disponible como app móvil nativa.
          </Text>

          {/* Input and Button */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={message}
              onChangeText={setMessage}
              placeholder="Escribe tu mensaje aquí..."
              placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Enviar Mensaje</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Card */}
        <View style={styles.card}>
          <Text style={styles.featuresTitle}>Características de la App:</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>✅ Interfaz nativa móvil</Text>
            <Text style={styles.featureItem}>✅ Optimizada para Android/iOS</Text>
            <Text style={styles.featureItem}>✅ Gestos touch nativos</Text>
            <Text style={styles.featureItem}>✅ Funcionamiento offline</Text>
            <Text style={styles.featureItem}>✅ Notificaciones push</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  inputContainer: {
    gap: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
