export type EventType = "success" | "danger" | "warning" | "info" | "loader_start" | "loader_stop";

export type EventPayload = {
  type: EventType;
  message: string;
};

type Listener = (event: EventPayload) => void;

class EventBus {
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  emit(event: EventPayload) {
    this.listeners.forEach((listener) => listener(event));
  }
}

export const eventBus = new EventBus();