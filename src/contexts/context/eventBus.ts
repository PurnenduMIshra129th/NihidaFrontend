export type EventType = "success" | "danger" | "warning" | "info" | "loader_start" | "loader_stop";

export type EventPayload = {
  type: EventType;
  message: string;
};

type Listener = (event: EventPayload) => void;

class EventBus {
  private listeners: Listener[] = [];
  private messageQueue: EventPayload[] = [];
  private isProcessingQueue = false;

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  emit(event: EventPayload) {
    if (["success", "danger", "warning", "info"].includes(event.type)) {
      this.enqueueAlert(event);
    } else {
      this.listeners.forEach((listener) => listener(event));
    }
  }

  private enqueueAlert(event: EventPayload) {
    this.messageQueue.push(event);
    if (!this.isProcessingQueue) {
      this.processNextMessage();
    }
  }

  private processNextMessage() {
    if (this.messageQueue.length === 0) {
      this.isProcessingQueue = false;
      return;
    }

    this.isProcessingQueue = true;
    const nextMessage = this.messageQueue.shift();

    if (nextMessage) {
      this.listeners.forEach((listener) => listener(nextMessage));
    }
    
    setTimeout(() => {
      this.processNextMessage();
    }, 3000);
  }
}

export const eventBus = new EventBus();